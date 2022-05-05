<?php

$a = 5;
$b  = 5;
$b2  = "5";
$c = 9;
$d = 2;


// == igual compara dato
var_dump ($a == $b);


// === idetico (cono js). compara dato y tipo
var_dump ($a == $b);


// !=  diferente
var_dump($a != $b);


// !== diferente y compara tipo
var_dump($b !== $b);


// < menor que
var_dump ($c < $b);


// > mayor que
var_dump ($c > $b);


// >= mayor igual que
var_dump ($c >= $b);


// <= mayor igual que
var_dump ($a <= $b);



// nave espacial <=>
echo 2 <=> 1; // 1
echo 1 <=> 1;  //0
echo -50 <=> 1; //-1


// ??  funcion de null

$edad_1 = 25;

echo $edad_1 ?? $edad_2; // si una edad 
                // no esta definida, usa la otra