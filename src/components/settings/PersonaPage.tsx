import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import { BasicPage, FormRow } from './common';
import { TextInput } from '@/components/textInput';
import { updateConfig } from '@/utils/config';
import { buildSystemPrompt, getCodeList } from '@/utils/persona';
import { TagsInput } from 'react-tag-input-component';

import { CodeBracketIcon } from '@heroicons/react/24/outline';

export function PersonaPage({
  personaBio,
  personaDislikes,
  personaLikes,
  personaName,
  personaPersonalityCode,
  setPersonaBio,
  setPersonaDislikes,
  setPersonaLikes,
  setPersonaName,
  setPersonaPersonalityCode,
  setSettingsUpdated,
}: {
  personaBio: string;
  personaDislikes: string;
  personaLikes: string;
  personaName: string;
  personaPersonalityCode: string;
  setPersonaBio: (updated: string) => void;
  setPersonaDislikes: (name: string) => void;
  setPersonaLikes: (name: string) => void;
  setPersonaName: (name: string) => void;
  setPersonaPersonalityCode: (name: string) => void;
  setSettingsUpdated: (updated: boolean) => void;
}) {
  const { t } = useTranslation();
  const personaList = getCodeList();
  const [prompt, setPrompt] = useState(buildSystemPrompt());
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    setPrompt(buildSystemPrompt());
  }, [personaBio, personaDislikes, personaLikes, personaName, personaPersonalityCode]);

  return (
    <BasicPage
      title={t('Persona')}
      description={t('cfg_persona_desc', 'Manage your Persona settings.')}
    >
      <ul role="list" className="divide-y divide-gray-100">
        {/* Persona Name */}
        <li className="py-2">
          <FormRow label={t('Persona Name')}>
            <p className="pb-1">
              {t('cfg_persona_name', 'Enter the name your Persona will use.')}
            </p>
            <TextInput
              value={personaName}
              onChange={(event: React.ChangeEvent<any>) => {
                setPersonaName(event.target.value);
                updateConfig('persona_name', event.target.value);
                setSettingsUpdated(true);
              }}
            />
          </FormRow>
        </li>
        {/* Persona Bio */}
        <li className="py-2">
          <FormRow label={t('Persona Bio')}>
            <p className="pb-1">
              {t('cfg_persona_name', 'Enter your Personas biography.')}
            </p>
            <textarea
              value={personaBio}
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event: React.ChangeEvent<any>) => {
                setPersonaBio(event.target.value);
                updateConfig('persona_bio', event.target.value);
                setSettingsUpdated(true);
              }}
            />
          </FormRow>
        </li>
        {/* Personality Code */}
        <li className="py-2">
          <FormRow label={t('Personality Code')}>
            <p className="pb-1">
              {t(
                'cfg_persona_code',
                'Select your Personas Briggs Myers personality code.',
              )}
            </p>
            <select
              value={personaPersonalityCode}
              className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event: React.ChangeEvent<any>) => {
                setPersonaPersonalityCode(event.target.value);
                updateConfig('persona_personality_code', event.target.value);
                setSettingsUpdated(true);
              }}
            >
              {personaList.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
            <p className="py-2">
              <a
                href="https://www.16personalities.com"
                target="_blank"
                className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t('Find your personality code')}
              </a>
            </p>
          </FormRow>
        </li>
        {/* Persona Likes */}
        <li className="py-2">
          <FormRow label={t('Persona Likes')}>
            <p className="pb-1">
              {t('cfg_persona_likes', 'List things your persona likes.')}
            </p>
            <TagsInput
              value={
                personaLikes.length > 0
                  ? personaLikes
                      .split(',')
                      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                  : []
              }
              name="likes"
              onChange={(data) => {
                const tags = data
                  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                  .join(',');
                setPersonaLikes(tags);
                updateConfig('persona_likes', tags);
                setSettingsUpdated(true);
              }}
              separators={['Enter', ',']}
              placeHolder={t('Add Like')}
            />
          </FormRow>
        </li>
        {/* Persona Dislikes */}
        <li className="py-2">
          <FormRow label={t('Persona Dislikes')}>
            <p className="pb-1">
              {t('cfg_persona_dislikes', 'List things your persona dislikes.')}
            </p>
            <TagsInput
              value={
                personaDislikes.length > 0
                  ? personaDislikes
                      .split(',')
                      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                  : []
              }
              name="dislikes"
              onChange={(data) => {
                const tags = data
                  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                  .join(',');
                setPersonaDislikes(tags);
                updateConfig('persona_dislikes', tags);
                setSettingsUpdated(true);
              }}
              separators={['Enter', ',']}
              placeHolder={t('Add Dislike')}
            />
          </FormRow>
        </li>
        {/* Preview Prompt */}
        <li className="py-2">
          <FormRow label={t('Preview Prompt')}>
            <p className="pb-1">
              {t('cfg_persona_prompt', 'This is the prompt we will send to your LLM.')}
            </p>
            <button
              className="mt-1 mb-2 pl-7 relative rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setShowPrompt(!showPrompt)}
            >
              <CodeBracketIcon className="w-3 h-3 text-white absolute left-2 top-1.5" />
              {showPrompt ? 'Hide Prompt' : 'Show Prompt'}
            </button>
            {showPrompt && (
              <textarea
                value={prompt}
                rows={40}
                readOnly={true}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs"
              />
            )}
          </FormRow>
        </li>
      </ul>
    </BasicPage>
  );
}
