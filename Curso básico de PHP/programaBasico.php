<?php

// para hacer en consola

$segundos = readline("Ingresa el tiempo en segundos");

$hora = (int) ($segundos / 36000);

$segundos = (int) ($segundos % 36000); // agarra el sobrante de la resta

$minutos = (int) ($segundos / 60);

$segundos = (int) ($segundos % 60);

echo "Son $hora horas, $minutos minutos y $segundos segundos";