<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionUserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    Permission::create([
		    'name'			=>	'users.list',
		    'slug'			=>	'users.list',
		    'description'	=>	'Listar Usuarios',
		    'model'			=>	'user'
		]);

		Permission::create([
		    'name'			=>	'users.add',
		    'slug'			=>	'users.add',
		    'description'	=>	'Agregar Usuarios',
		    'model'			=>	'user'
		]);

		Permission::create([
		    'name'			=>	'users.edit',
		    'slug'			=>	'users.edit',
		    'description'	=>	'Editar Usuarios',
		    'model'			=>	'user'
		]);

		Permission::create([
		    'name'			=>	'users.delete',
		    'slug'			=>	'users.delete',
		    'description'	=>	'Eliminar Usuarios',
		    'model'			=>	'user'
		]);
    }
}
