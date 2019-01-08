<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'ci','nombre','apellidos','genero','fecha_nacimiento','estado_civil','direccion','telefono','avatar'
	];

}
