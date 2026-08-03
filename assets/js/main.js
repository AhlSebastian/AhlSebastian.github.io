document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-bibtex').forEach((button) => {
        button.addEventListener('click', async () => {
            const block = button.closest('.bibtex-block');
            const code = block?.querySelector('code');
            if (!code) return;

            const text = code.textContent ?? '';

            try {
                await navigator.clipboard.writeText(text);

                const originalLabel = button.textContent;
                button.textContent = 'Copied';
                window.setTimeout(() => {
                    button.textContent = originalLabel;
                }, 1200);
            } catch (error) {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(code);
                selection?.removeAllRanges();
                selection?.addRange(range);
            }
        });
    });
});