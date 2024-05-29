import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>
      <header class="navbar bg-base-100 w-full">
        <div class="flex-1">
          <Link href="/" class="btn btn-ghost normal-case text-xl">AD Smart City</Link>
        </div>

        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><Link href="/smart-initiatives">Smart Initiatives</Link></li>
            <li><Link href="/smart-community">Smart Community</Link></li>
            <li><Link href="/ai-advanced-technologies">AI & Advanced Technologies</Link></li>
            <li><Link href="/sustainable">Sustainable</Link></li>
            <li><Link href="/communications">Communications</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
});
