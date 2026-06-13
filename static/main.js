  const currentPage = window.location.pathname;

    // Protected pages
    const protectedPages = ['account.html', 'cart.html', 'checkout.html'];
    const protectedPages = ['account.html', 'checkout.html'];
    const isProtected = protectedPages.some(page => currentPage.includes(page));

    if (isProtected && !token) {
