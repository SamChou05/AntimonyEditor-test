interface Model {
    name: string;
    url: string;
    id: string;
}

interface Models {
    models: Map<String, Model>;
}

const corsProxyUrl = "https://api.allorigins.win/raw?url=";

export async function searchModels(search: KeyboardEvent) {
    try {
        const queryText = (search.target as HTMLInputElement).value.trim();
        const response = await fetch(corsProxyUrl + `https://www.ebi.ac.uk/biomodels/search?query=${queryText}%26numResults=25%26format=json`)
        if (response.ok) {
            const results = await response.json();
            const models: Models = { models: new Map() };
            results.models.forEach((model: any) => {
                if (model.id in models.models) return;
                models.models.set(model.id, {
                    name: model.name,
                    url: model.url,
                    id: model.id
                });
            });
            return models;
        } else {
            throw new Error('Error when fetching search results');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getModel(modelId: string) {
    try {
        const response = await fetch(corsProxyUrl + `https://www.ebi.ac.uk/biomodels/model/download/${modelId}?filename=${modelId}_url.xml`);
        if (response.ok) {
            const model = await response.text();
            console.log(model);
            return model;
        } else {
            throw new Error('Error when fetching biomodel');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export function getBiomodels(setLoading: React.Dispatch<React.SetStateAction<boolean>>, setChosenModel: React.Dispatch<React.SetStateAction<string | null>>) {
  const biomodelBrowse = document.getElementById('biomodel-browse') as HTMLInputElement;
  const dropdown = document.getElementById('dropdown');
  var biomodels: any;
  var chosenModel: any;

  biomodelBrowse.addEventListener('keyup', async (val) => {
    const biomodel = val;
    if ((val.target as HTMLInputElement).value.length < 3) {
      dropdown!.innerHTML = "";
      return;
    }
    setTimeout(async () => {
      setLoading(true);
      dropdown!.innerHTML = "";
      biomodels = await searchModels(biomodel);
      // If no models found, display "No models found"
      if (biomodels.models.size === 0) {
        setLoading(false);
        biomodels = null;
        const li = document.createElement('li');
        li.innerHTML = "No models found";
        dropdown!.innerHTML = "";
        dropdown!.appendChild(li);
        return;
      }
      // Otherwise, display the models in the dropdown
      dropdown!.style.display = "block";
      biomodels.models.forEach(function (model: any) {
        setLoading(false);
        const a = document.createElement('a');
        a.addEventListener('click', () => {
          biomodelBrowse.value = "";
          dropdown!.innerHTML = "";
          chosenModel = model.id;
          setChosenModel(chosenModel);
        });
        a.innerHTML = model.name + ": " + model.id + "\n";
        dropdown!.appendChild(a);
      });
    }, 300);
  });
}