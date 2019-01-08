<?php

use Illuminate\Database\Seeder;

class proyectosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('proyectos')->insert([
            'nombre' => 'megahorizonte ',
            'imagen'=>'default.jpg',
            'descripcion'=>'El terreno'
        ]);
    }
}
