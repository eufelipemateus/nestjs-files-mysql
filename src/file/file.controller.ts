import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from './file.entity';
import { FilesService } from './file';

import fs = require('fs');
import path = require('path');
import { Readable } from 'stream';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file, @Res() response) {
    
    const data = {
      file:file.originalname,
      content_type: file.mimetype,
      data: file.buffer,
    } as unknown as File;

    try {
      const content = await this.fileService.create(data);

      return response.status(200).json(content);
    } catch (e) {
      return response.status(500).json('Error ao tentar salvar');
    }
  }

  @Get()
  getAll(): Promise<File[]> {
    return this.fileService.findAll();
  }

  @Get('/view/:id')
  async getVideo(@Param('id') id: string, @Res() res) {
    const fileData = await this.fileService.findOne(id);

    res.set('Content-Type', fileData.content_type);
    res.set('Content-Disposition', `attachment; filename=${fileData.file}`);

    const myBuffer = Buffer.from(fileData.data);
    const stream = Readable.from(myBuffer.toString());
    stream.pipe(res);
  }
}
