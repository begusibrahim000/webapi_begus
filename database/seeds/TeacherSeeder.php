<?php

use Illuminate\Database\Seeder;
use \App\Teacher;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Teacher::insert([
        	'nama' => 'Robbi',
        	'jk' => 'L'
        ]);

        Teacher::insert([
        	'nama' => 'Rahma',
        	'jk' => 'P'
        ]);
    }
}
