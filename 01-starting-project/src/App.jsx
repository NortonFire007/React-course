import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.slice(0, 4).map((concept, index) => (
              <CoreConcept
                key={index}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((concept, index) => (
              <TabButton key={index}>{concept.title}</TabButton>
            ))}
            {/* OR <TabButton label='Components'></TabButton> */}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
