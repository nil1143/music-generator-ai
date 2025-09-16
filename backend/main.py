import modal
import os

app = modal.App("music-generator")


image = (
    modal.Image.debian_slim()
    .apt_install("git")
    .pip_install_from_requirements("requirements.txt")
    .run_commands(
        [
            "git clone https://github.com/ace-step/ACE-Step.git /tmp/ACE-Step",
            "cd /tmp/ACE-Step && pip install .",
        ]
    )
    .env({"HF_HOME": "/.cache/huggingface"})
    .add_local_python_source("prompts")
)

model_volume = modal.Volume.from_name("ace-step-models", create_if_missing=True)
hf_volume = modal.Volume.from_name("qwen-hf-cache", create_if_missing=True)

music_gen_secrets = modal.Secret.from_name("music-gen-secret")


@app.function(image=image, secrets=[modal.Secret.from_name("music-gen-secret")])
def function_test():
    print("hello")
    print(os.environ["test"])


# @app.cls(
#     image=image,
#     gpu="L40S",
#     volumes={"/models": model_volume, "/.cache/huggingface": hf_volume},
# )
# class MusicGenServer:
#     def load_model(self):
#         pass

@app.local_entrypoint()
def main():
    function_test.remote()
