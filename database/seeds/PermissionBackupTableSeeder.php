<?php

use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionBackupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create([
		    'name'			=>	'backups.list',
		    'slug'			=>	'backups.list',
		    'description'	=>	'Listar Copias de Seguridad',
		    'model'			=>	'backup'
		]);

		Permission::create([
		    'name'			=>	'backups.add',
		    'slug'			=>	'backups.add',
		    'description'	=>	'Crear Copias de Seguridad',
		    'model'			=>	'backup'
		]);

		Permission::create([
		    'name'			=>	'backups.delete',
		    'slug'			=>	'backups.delete',
		    'description'	=>	'Eliminar Copias de Seguridad',
		    'model'			=>	'backup'
		]);
    }
}
