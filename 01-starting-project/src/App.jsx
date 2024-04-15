import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedBtn) => {
    setSelectedTopic(selectedBtn.toLowerCase());
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.slice(0, 4).map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
              // <CoreConcept
              //   key={index}
              //   title={concept.title}
              //   description={concept.description}
              //   image={concept.image}
              // />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((concept, index) => (
              <TabButton
                isSelected={selectedTopic === concept.title.toLowerCase()}
                onSelect={() => handleSelect(concept.title)}
                key={index}
              >
                {concept.title}
              </TabButton>
            ))}
            {/* OR <TabButton label='Components'></TabButton> */}
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
