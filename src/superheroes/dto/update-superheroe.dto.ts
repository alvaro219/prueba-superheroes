import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateSuperheroeDto {
    @ApiProperty()
    @IsNotEmpty()
    nombre?: string;
    apellidos?: string;
    habilidadId?: number;
    ligaId?: number;
  }
  