document.addEventListener('click', e => {
    const isDropdownBtn = e.target.classList.contains('option');
    const currentDropdown = e.target.parentElement
    if (!isDropdownBtn) return

    if (isDropdownBtn) {
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('.active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active');
    })
})