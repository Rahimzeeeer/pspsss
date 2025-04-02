document.addEventListener("DOMContentLoaded", () => {
    const papers = document.querySelectorAll('.paper');

    papers.forEach(paper => {
        paper.addEventListener('mousedown', function (e) {
            let offsetX = e.clientX - paper.getBoundingClientRect().left;
            let offsetY = e.clientY - paper.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                paper.style.left = pageX - offsetX + 'px';
                paper.style.top = pageY - offsetY + 'px';
            }

            function onMouseMove(e) {
                moveAt(e.pageX, e.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            paper.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                paper.onmouseup = null;
            };
        });

        paper.ondragstart = function () {
            return false;
        };
    });
});

