
import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreatePokemonDto {

    //isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    // inString, Minlenth
    @IsString()
    @MinLength(1)
    name: string;
}
