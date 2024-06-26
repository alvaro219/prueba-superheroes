import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateAbilityDto {
  @ApiProperty()
  @IsNotEmpty()
  nombre: string;
  poder: number;
  defensa: number;
}