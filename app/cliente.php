<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'ci','nombres','apellidos','genero','fecha_nacimiento','estado_civil','direccion','telefono',
	];

}
