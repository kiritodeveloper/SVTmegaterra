<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Personas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->increments('id');

            $table->string('ci')->unique();
            $table->enum('extension', ['LP', 'OR', 'PT', 'CB', 'SC', 'BN', 'PA', 'TJ', 'CH'])->default('BN');
            $table->string('nombres')->nullable();
            $table->string('apellidos')->nullable();
            $table->enum('genero', ['masculino', 'femenino'])->default('masculino');
            $table->string('direccion')->nullable();
            $table->string('telefono')->nullable();
            $table->string('celular')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->string('estado_civil')->nullable();
            $table->text('foto')->nullable();

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
