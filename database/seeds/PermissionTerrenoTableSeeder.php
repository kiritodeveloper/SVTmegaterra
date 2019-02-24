<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionTerrenoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    Permission::create([
		    'name'			=>	'terrenos.list',
		    'slug'			=>	'terrenos.list',
		    'description'	=>	'Listar Terrenos',
		    'model'			=>	'terreno'
		]);

		Permission::create([
		    'name'			=>	'terrenos.add',
		    'slug'			=>	'terrenos.add',
		    'description'	=>	'Agregar Terrenos',
		    'model'			=>	'terreno'
		]);

		Permission::create([
		    'name'			=>	'terrenos.edit',
		    'slug'			=>	'terrenos.edit',
		    'description'	=>	'Editar Terrenos',
		    'model'			=>	'terreno'
		]);

		Permission::create([
		    'name'			=>	'terrenos.delete',
		    'slug'			=>	'terrenos.delete',
		    'description'	=>	'Eliminar Terrenos',
		    'model'			=>	'terreno'
		]);
    }
}
