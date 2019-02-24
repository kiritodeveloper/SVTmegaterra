<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionRoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
	    Permission::create([
		    'name'			=>	'roles.list',
		    'slug'			=>	'roles.list',
		    'description'	=>	'Listar Roles',
		    'model'			=>	'role'
		]);

		Permission::create([
		    'name'			=>	'roles.add',
		    'slug'			=>	'roles.add',
		    'description'	=>	'Agregar Roles',
		    'model'			=>	'role'
		]);

		Permission::create([
		    'name'			=>	'roles.edit',
		    'slug'			=>	'roles.edit',
		    'description'	=>	'Editar Roles',
		    'model'			=>	'role'
		]);

		Permission::create([
		    'name'			=>	'roles.delete',
		    'slug'			=>	'roles.delete',
		    'description'	=>	'Eliminar Roles',
		    'model'			=>	'role'
		]);
    }
}
