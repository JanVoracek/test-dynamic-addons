import { fetchAddon_runInContext } from '../addons/addon-run-in-context';
import { fetchAddon_SourceTextModule } from '../addons/addon-source-text-module';

export default async function Homepage() {
  const { Addon: Addon1 } = await fetchAddon_runInContext();
  const { Addon: Addon2 } = await fetchAddon_SourceTextModule();
  return (
    <article>
      <Addon1 name='World' />
      <Addon2 name='World' />
    </article>
  );
}
