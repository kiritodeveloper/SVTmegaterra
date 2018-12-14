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
            
            $table->string('nit')->nullable();
            $table->integer('persona_id')->unsigned();
            $table->foreign('persona_id')->references('id')->on('personas');

            $table->enum('estado', ['enable', 'disable', 'delete'])->default('enable');
            
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
