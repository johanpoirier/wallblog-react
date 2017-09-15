<?php
$wallblog = require __DIR__ . '/../api/wallblog.php';
$api = require __DIR__ . '/../api/controllers/api.php';
$wallblog->mount('/api', $api);

$wallblog->run();
