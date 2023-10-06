(function () {
    const editorWrapper = document.getElementById('flems-editor');
    const configURL = editorWrapper.getAttribute('data-configuration-file');

    fetch(configURL).then((response) => response.text()).then((yamlConfig) => {
        const editorConfiguration =  jsyaml.load(yamlConfig);
        Flems(document.getElementById('flems-editor'), editorConfiguration);
    });
})();

