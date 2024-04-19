import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedBtn) => {
    setSelectedTopic(selectedBtn.toLowerCase());
  };

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {CORE_CONCEPTS.map((concept, index) => (
              <TabButton
                isSelected={selectedTopic === concept.title.toLowerCase()}
                onClick={() => handleSelect(concept.title)}
                key={index}
              >
                {concept.title}
              </TabButton>
            ))}
            {/* OR <TabButton label='Components'></TabButton> */}
          </>
        }
      ></Tabs>

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
    </Section>
  );
};

export default Examples;
