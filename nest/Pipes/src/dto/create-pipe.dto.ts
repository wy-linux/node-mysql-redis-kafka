import { IsString, IsInt, Min, Max, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreatePipeDto {
  @Length(5, 10, {
    message: "限制5~10个字符"
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  @Min(18)
  @Max(100)
  age: number;

  @IsEmail()
  email: string;

}
