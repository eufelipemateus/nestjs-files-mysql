import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './file.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private contentsRepository: Repository<File>,
  ) {}

  create(file: File) {
    return this.contentsRepository.save(file);
  }

  findAll(): Promise<File[]> {
    return this.contentsRepository.find();
  }

  findOne(id: string): Promise<File> {
    return this.contentsRepository.findOne(id);
  }

  async update(id: number, data: File): Promise<File> {
    await this.contentsRepository.update({ id }, data);
    return this.contentsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.contentsRepository.delete(id);
  }
}
