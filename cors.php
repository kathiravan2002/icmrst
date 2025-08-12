<?php

// header("Access-Control-Allow-Origin: *");

// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");

$allowed_origins = [
    "https://icmrst.org",
    "https://www.icmrst.org"
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}