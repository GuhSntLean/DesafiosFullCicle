import { Test, TestingModule } from '@nestjs/testing';
import { CourserController } from './courser.controller';

describe('Courser Controller', () => {
  let controller: CourserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourserController],
    }).compile();

    controller = module.get<CourserController>(CourserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
