<!DOCTYPE html>
<html lang        ="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="media/css/style.css">
  <title>Tasks list</title>
</head>

<body>

  <header class="page-header">
    <form id="search-form">
      <input type="search" id="search" placeholder="Search task">
    </form>
  </header>

  <ul class="tasks" id="tasks">
    <li>
      <form id="create-task-form">
        <input type="text" id="name" placeholder="Name" >
        <input type="date" id="date" min="<?=date("Y-m-d")?>" >
        <input type="time" id="time" min="<?=date("H:m")?>" >
        <input type="submit" id="create-task" value="+">
        <textarea id="subtasks" placeholder="Subtasks"></textarea>
      </form>
    </li>
    <!-- <li>
      <label class="task">
        <input type="checkbox" class="check">
        <h3 class="title">Wake up and brush teeth</h3>
        <span class="status today">Сегодня</span>
        <time class="date">25 Февраля 2020</time>
        <time class="time">16:45</time>
        <button class="delete">X</button>
        <ul class="subtasks">
          <li>
            <label>
              <input type="checkbox">
              Wake up
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox">
              Brush teeth
            </label>
          </li>
        </ul>
      </label>
    </li> -->
  </ul>

  <script src="media/js/create-task.js" charset="utf-8"></script>
  <script src="media/js/complete-task.js" charset="utf-8"></script>
  <script src="media/js/delete-task.js" charset="utf-8"></script>


</body>

</html>
