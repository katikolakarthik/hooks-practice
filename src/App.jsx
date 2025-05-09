import FormComponent from './components/FormComponent';
import FocusComponent from './components/FocusComponent';
import RenderDemoComponent from './components/RenderDemoComponent';
import NumberTracker from './components/NumberTracker';
import RenderCounter from './components/RenderCounter';
import Usestate from './components/UseState';

function App() {
  return (
    <div>
      <h1>useRef Hook Examples</h1>
      <div>
        <FormComponent />
        <FocusComponent />
        <RenderDemoComponent />
        <NumberTracker />
        <RenderCounter /> 
        
        <Usestate />
      </div>
    </div>
  );
}

export default App; 