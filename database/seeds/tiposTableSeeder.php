<?php

use Illuminate\Database\Seeder;

class tiposTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipos')->insert([
            'nombre' => 'Lotes de terrenos en urbanizaciones',
            'color'=>'#e01ab5',
        ]);
        DB::table('tipos')->insert([
            'nombre' => 'Lotes de terrenos en condominios',
            'color'=>'#17bd32',
        ]);
        DB::table('tipos')->insert([
            'nombre' => 'Lotes de terrenos para cementerios privados ',
            'color'=>'#1815a1',
        ]);
        DB::table('tipos')->insert([
            'nombre' => 'Casas en urbanizaciones o condominios ',
            'color'=>'#c41010',
        ]);
        DB::table('tipos')->insert([
            'nombre' => 'Oficinas privadas ',
            'color'=>'#e7eb22',
        ]);                
    }
}
