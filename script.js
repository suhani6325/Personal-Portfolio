console.log("hello")

document.querySelector('.cross').style.display = 'none';

document.querySelector('.ham').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.cross').style.display = 'none';
        document.querySelector('.ham').style.display = 'inline';
    } else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 350);
    }
});
document.querySelector('.cross').addEventListener("click", () => {
  document.querySelector('.sidebar').classList.add('sidebarGo');
  document.querySelector('.cross').style.display = 'none';
  document.querySelector('.ham').style.display = 'inline';
});