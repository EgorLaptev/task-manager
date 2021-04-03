'use strict';

window.addEventListener('unload', evt => {
    Task.save();
});