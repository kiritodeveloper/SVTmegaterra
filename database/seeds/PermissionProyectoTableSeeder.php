<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionProyectoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    Permission::create([
		    'name'			=>	'proyectos.list',
		    'slug'			=>	'proyectos.list',
		    'description'	=>	'Listar Proyectos',
		    'model'			=>	'proyecto'
		]);

		Permission::create([
		    'name'			=>	'proyectos.add',
		    'slug'			=>	'proyectos.add',
		    'description'	=>	'Agregar Proyectos',
		    'model'			=>	'proyecto'
		]);

		Permission::create([
		    'name'			=>	'proyectos.edit',
		    'slug'			=>	'proyectos.edit',
		    'description'	=>	'Editar Proyectos',
		    'model'			=>	'proyecto'
		]);

		Permission::create([
		    'name'			=>	'proyectos.delete',
		    'slug'			=>	'proyectos.delete',
		    'description'	=>	'Eliminar Proyectos',
		    'model'			=>	'proyecto'
		]);
    }
}
