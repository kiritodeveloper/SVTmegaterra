<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Clientes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   
        Schema::create('clientes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ci')->unique();
            $table->string('nombre');
            $table->string('apellidos')->nullable();
            $table->enum('genero', ['masculino', 'femenino'])->default('masculino');
            $table->date('fecha_nacimiento')->nullable();
            $table->string('estado_civil')->nullable();
            $table->string('direccion');
            $table->string('telefono');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
