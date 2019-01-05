<?php

use Illuminate\Database\Seeder;

class ClientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clientes')->insert([
            'ci' => '85456217',
            'nombre' => 'kirito',
            'apellidos'=>'kirigaya kazuto',
            'genero' => 'masculino',
            'fecha_nacimiento'=>'1990-01-05',
            'estado_civil'=>'soltero',
            'direccion'=>'direccion',
            'telefono'=>'telefono'
        ]);
        DB::table('clientes')->insert([
            'ci' => '854562185',
            'nombre' => 'kirito1',
            'apellidos'=>'yokokurama',
            'genero' => 'masculino',
            'fecha_nacimiento'=>'1991-01-05',
            'estado_civil'=>'casado',
            'direccion'=>'america 485',
            'telefono'=>'67916774'
        ]);
    }
}
