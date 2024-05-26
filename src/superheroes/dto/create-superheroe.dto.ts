import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSuperheroeDto {
    @ApiProperty()
    @IsNotEmpty()
    nombre: string;
    apellidos: string;
    habilidadId: number;
    ligaId: number;
  }
  