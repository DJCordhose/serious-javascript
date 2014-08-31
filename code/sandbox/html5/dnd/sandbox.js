"use strict";

// https://developer.mozilla.org/en-US/docs/DragDrop/Drag_and_Drop
// http://www.html5rocks.com/en/tutorials/dnd/basics/

function handleDragStart(e) {
    // Target (this) element is the source node.
    this.style.opacity = '0.4';

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
}
function handleDrop(e) {
    // this/e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }

    this.innerHTML = e.dataTransfer.getData('text/html');
}

function handleDragEnd(e) {
    // this/e.target is the source node.

    [].forEach.call(cols, function (col) {
        col.classList.remove('over');
    });
}

var cols = document.querySelectorAll('#columns .column');
[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart);
    col.addEventListener('dragenter', handleDragEnter);
    col.addEventListener('dragover', handleDragOver);
    col.addEventListener('dragleave', handleDragLeave);
    col.addEventListener('drop', handleDrop);
    col.addEventListener('dragend', handleDragEnd);
});