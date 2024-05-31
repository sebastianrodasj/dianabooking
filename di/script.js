document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent the form from submitting the usual way

        const destination = document.getElementById('destination').value.toLowerCase();
        const checkinDate = document.getElementById('checkin-date').value;
        const checkoutDate = document.getElementById('checkout-date').value;

        const criteria = [
            {
                destination: 'amazonas',
                checkinDate: '2023-03-12',
                checkoutDate: '2023-03-16',
                redirectUrl: 'amazonas.html'
            },
            {
                destination: 'guajira',
                checkinDate: '2023-11-18',
                checkoutDate: '2023-11-23',
                redirectUrl: 'guajira.html'
            },
            {
                destination: 'medellin',
                checkinDate: '2023-07-09',
                checkoutDate: '2023-07-10',
                redirectUrl: 'medellin.html'
            },
            {
                destination: 'cartagena',
                checkinDate: '2024-09-04',
                checkoutDate: '2024-09-08',
                redirectUrl: 'cartagena.html'
            },
            {
                destination: 'nevado del ruiz',
                checkinDate: '2023-10-24',
                checkoutDate: '2023-10-24',
                redirectUrl: 'nevado-del-ruiz.html'
            }
        ];

        const match = criteria.find(c =>
            destination === c.destination &&
            checkinDate === c.checkinDate &&
            checkoutDate === c.checkoutDate
        );

        if (match) {
            window.location.href = match.redirectUrl;
        } else {
            alert('No se encontraron resultados para tu búsqueda.');
        }
    });

    const checkinDateInput = document.getElementById('checkin-date');
    const checkoutDateInput = document.getElementById('checkout-date');

    checkinDateInput.addEventListener('change', () => {
        const checkinDate = new Date(checkinDateInput.value);
        checkoutDateInput.min = checkinDate.toISOString().split('T')[0];
        checkoutDateInput.value = checkinDateInput.value;
    });

    document.addEventListener('mousemove', (e) => {
        const heroSection = document.querySelector('.hero-section');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        heroSection.style.backgroundPosition = `${x * 50}% ${y * 50}%`;
    });
});
