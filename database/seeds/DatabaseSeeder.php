<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

            $this->call('PermissionsTableSeeder');
            $this->call('RolesTableSeeder');
            $this->call('ConnectRelationshipsSeeder');
            //$this->call('UsersTableSeeder');

        Model::reguard();
        $this->call(ClientesTableSeeder::class);
        $this->call(tiposTableSeeder::class);
        $this->call(proyectosTableSeeder::class);
       $this->call(UsersTableSeeder::class);
        factory(\App\User::class,1)->create();
    }
}