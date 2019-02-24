<?php

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use jeremykenedy\LaravelRoles\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PermissionBackupTableSeeder::class,
            PermissionUserTableSeeder::class,
            PermissionClienteTableSeeder::class,
            PermissionTerrenoTableSeeder::class,
            PermissionPlanTableSeeder::class,
            PermissionProyectoTableSeeder::class,
            PermissionRoleTableSeeder::class,
            PermissionVentaTableSeeder::class,
            PermissionInvoiceTableSeeder::class,
        ]);
        
    }
}
