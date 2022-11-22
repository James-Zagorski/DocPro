import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
<div>
    <div>
        <h3>DocPro Powered by Valor</h3>
    </div>
    <div>
        <div>
            <h3>Number of Providers</h3>
            <h3>Average Patients Seen per Day</h3>
        </div>
    </div>
    <div>
        <div>
            <h3>Insurance Mix</h3>
                <div>Medicaid</div>
                <div>Commercial</div>
                <div>Medicare</div>
        </div>
    </div>
    <div> 
        <div>
            <h3>What Services do you currently offer? And at what percent are you capturing your eligible population?</h3>
                <div>Ankle Brachial Index</div>
                <div>Depression Screen</div>
                <div>Alcohol Screen</div>
                <div>Cardio Screen</div>
                <div>Obesity Counseling</div>
                <div>Allergy Testing</div>
                <input type="text"/>
                <button>Submit</button>
        </div>
    </div>
</div>
  );
}

export default App;
