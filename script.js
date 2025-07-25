document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Удаляем активный класс у всех пунктов меню
            menuItems.forEach(i => i.style.backgroundColor = '#ddd');
            
            // Добавляем активный класс к текущему пункту
            this.style.backgroundColor = '#aaa';
            
            // Скрываем все контент-блоки
            document.querySelectorAll('.content-item').forEach(content => {
                content.classList.remove('active');
            });
            
            // Показываем выбранный контент-блок
            const contentId = this.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');
        });
    });
    
    // Активируем первый пункт меню по умолчанию
    if (menuItems.length > 0) {
        menuItems[0].style.backgroundColor = '#aaa';
    }
});
