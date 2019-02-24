<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    Permission::create([
		    'name'			=>	'planes.list',
		    'slug'			=>	'planes.list',
		    'description'	=>	'Listar Planes',
		    'model'			=>	'plan'
		]);

		Permission::create([
		    'name'			=>	'planes.add',
		    'slug'			=>	'planes.add',
		    'description'	=>	'Agregar Planes',
		    'model'			=>	'plan'
		]);

		Permission::create([
		    'name'			=>	'planes.edit',
		    'slug'			=>	'planes.edit',
		    'description'	=>	'Editar Planes',
		    'model'			=>	'plan'
		]);

		Permission::create([
		    'name'			=>	'planes.delete',
		    'slug'			=>	'planes.delete',
		    'description'	=>	'Eliminar Planes',
		    'model'			=>	'plan'
		]);
    }
}
