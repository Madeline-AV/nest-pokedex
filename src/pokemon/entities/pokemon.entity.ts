import { Injectable } from "@nestjs/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose";

@Injectable()
@Schema()
export class Pokemon extends Document {

    // id: string // Mongo me lo da
    @Prop({
        unique: true,
        index : true,
        required: true,
    })
    name: string;

    @Prop({
        unique: true,
        index : true,
        required: true,
    })
    no: number;

}

export const PokemonShema = SchemaFactory.createForClass(Pokemon);
