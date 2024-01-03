<script>
    let items = [
        {
            href: 'home'
        },
        {
            href: 'about'
        },
        {
            href: 'work'
        },
        {
            href: 'contact'
        }
    ]
</script>

<nav class="fixed left-8 top-8 z-50">
    <ul>
        {#each items as { href }}
        <li>
            <a class="text-secondary hover:text-light transition" href="/">{href}</a>
        </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        font-family: 'Lobster', sans-serif;
    }
</style>