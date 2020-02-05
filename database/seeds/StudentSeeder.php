<?php

use Illuminate\Database\Seeder;
use \App\Student;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Student::create([
        	'nama'	=> 'Begus Ibrahim',
        	'jk'	=> 'L'
        ]);

        Student::create([
        	'nama'	=> 'wanita',
        	'jk'	=> 'P'
        ]);
    }
}
